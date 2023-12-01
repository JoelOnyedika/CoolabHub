"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Plus, BadgePercent } from "lucide-react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const GettingStartedPage = () => {
  const [chosenEmoji, setChosenEmoji] = useState<any | string>("");
  const [selectedUploadImage, setSelectedUploadImage] = useState<File | null>(
    null
  );
  const [image, setImage] = useState<File | string | null>(null);

  const handleFileChange = (event: any) => {
    // Handle the file change here
    const selectedFile = event.target.files[0];
    // You can use the selectedFile for further processing (e.g., upload to a server)
    setSelectedUploadImage(selectedFile);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setImage(e.target.value)
  };

  const handleImageSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle image submission here, for example, you can use the uploadedImage state
  };

  const FormSchema = z.object({
    url: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div className="h-screen">
      <div>
        <div>
          {chosenEmoji && <span className="text-4xl">{chosenEmoji}</span>}
          {image && <img src={image}/>}
        </div>
        <div className="group flex">
          <Dialog>
            <DialogTrigger>
              <Button
                className="p-2 invisible group-hover:visible transition-opacity duration-1000"
                variant="ghost"
              >
                <ImageIcon className="mr-2" />
                Add an image
              </Button>
            </DialogTrigger>
            <DialogContent className="space-y-8">
              <Label>Input a URL or upload an image</Label>
              <Form {...form}>
                <form action="" className="space-y-8">
                  {/* Image url field */}
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between">
                        <div className="space-y-0.5">
                          <FormControl>
                            <div className="flex">
                              <Input
                                placeholder="Url to an image"
                                {...field}
                                onSubmit={(e) => handleUrlSubmit}
                              />
                              <Button type="submit" variant={"outline"}>
                                Submit
                              </Button>
                            </div>
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Image upload field */}
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between">
                        <div className="space-y-0.5 flex">
                          <FormControl>
                            <div>
                              <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleImageUpload}
                                accept="image/*"
                              />
                              <Button
                                onClick={() => fileInputRef.current.click()}
                                variant="outline"
                              >
                                Upload an image
                              </Button>
                            </div>
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Button
                className="p-2 invisible group-hover:visible transition-opacity duration-1000"
                variant="ghost"
              >
                <BadgePercent className="mr-2" />{" "}
                {chosenEmoji === "" ? "Add an icon" : "Change your icon"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <Picker
                data={data}
                emojiSize={20}
                emojiButtonSize={28}
                onEmojiSelect={(emoji) => setChosenEmoji(emoji.native)}
              />
            </DialogContent>
          </Dialog>
        </div>
        <h1 className="text-4xl font-semibold">Getting Started</h1>
        <span>Welcome to CoolabHub</span>
      </div>
      <div>
        <div className="mt-5">
          <div className="inline-flex items-center justify-center space-x-2">
            <Button className="p-0" variant="ghost">
              <Plus />
            </Button>
            <input type="checkbox" />
            <span>
              Click anywhere and just start typing Click anywhere and just start
              typing{" "}
            </span>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center justify-center space-x-2">
            <Button className="p-0" variant="ghost">
              <Plus />
            </Button>
            <input type="checkbox" />
            <span>
              Hit / to see all the types of content you can add - headers,
              videos, sub pages, etc.
            </span>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center justify-center space-x-2">
            <Button className="p-0" variant="ghost">
              <Plus />
            </Button>
            <input type="checkbox" />
            <span>
              Highlight any text, and use the menu that pops up to style your
              writing however you like
            </span>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center justify-center space-x-2">
            <Button className="p-0" variant="ghost">
              <Plus />
            </Button>
            <input type="checkbox" />
            <span>
              Click the + New Page button at the bottom of your sidebar to add a
              new page
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;
