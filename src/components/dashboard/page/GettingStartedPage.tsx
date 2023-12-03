import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { BadgePercent, Image as ImageIcon, Plus } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const GettingStartedPage = () => {
  const [chosenEmoji, setChosenEmoji] = useState<string>("");
  const [image, setImage] = useState<File | null | string>(null);


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUrlSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle the URL submission logic here if needed
    const url = form.getValues().url;
    setImage(url);
  };

  const handleImageSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle the image submission logic here if needed
    if (image) {
      // Use 'image' as needed, for example, send it to the server
      console.log("Selected image:", image);
    }
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
        {image && <img className="w-full" src={URL.createObjectURL(image)} alt="Uploaded from file" />}
        <div>
          {chosenEmoji && <span className="text-[50px]">{chosenEmoji}</span>}
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
                <form
                  onSubmit={form.handleSubmit(handleImageSubmit)}
                  className="space-y-8 items-center"
                >
                  {/* Image url field */}
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <div className="space-y-0.5">
                      <Input
                        placeholder="Url to an image"
                        {...field}
                        onChange={(event) => setImage(event?.target.value)}
                    />
                    </div>
                  )}
                />
                {/* Image uplad field */}
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <div className="space-y-0.5 flex">
                        <input
                          type="file"
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                        <Button type="submit" variant="outline">
                          Upload an image
                        </Button>
                      </div>
                    )}
                  />
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