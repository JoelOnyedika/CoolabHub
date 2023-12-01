import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogHeader,
} from "@/components/ui/dialog";
import { Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Picker from "emoji-picker-react";
import { Label } from "@/components/ui/label";

const AccountSettings = () => {
  const [selectedUploadImage, setSelectedUploadImage] = useState<File | null>(
    null
  );

  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 cq  AZharacters.",
    }),
    domain: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const fileInputRef = useRef<File | null>(null);

  const handleImageClick = () => {
    // Trigger the file input when the image is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    // Handle the file change here
    const selectedFile = event.target.files[0];
    // You can use the selectedFile for further processing (e.g., upload to a server)
    setSelectedUploadImage(selectedFile);
  };

  return (
    <Form {...form}>
      <form className="mt-5 space-y-6">
        <h3 className="mb-5 text-lg font-medium">Account security</h3>
        <div className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Joel Onyedika CoolabHub" {...field} />
                  </FormControl>
                  <small>
                    You can use your organization or company name. Keep it
                    simple{" "}
                  </small>
                </div>
              </FormItem>
            )}
          />
          <div>
            <div className="cursor-pointer">
              <Dialog>
                <DialogTrigger>
                  <Avatar>
                    <AvatarImage
                      src={
                        "https://www.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg"
                      }
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DialogTrigger>
                <DialogContent>
                  <>
                    <Tabs >
                      <DialogHeader className="flex">
                        <TabsTrigger value="image">Upload Image</TabsTrigger>
                        <TabsTrigger value="emoji">Select Emoji</TabsTrigger>
                      </DialogHeader>
                      <TabsContent value="emoji">
                        <Picker />
                      </TabsContent>
                      <TabsContent value="image">
                        <div className="space-y-8">
                          <Label>Input a url link or select an image</Label>
                          <Input placeholder="Url..." type="url" />

                          <Button onClick={handleImageClick}>
                            Upload an Image
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </>
                </DialogContent>
              </Dialog>
            </div>
            <small>
              Upload an image or pick an emoji. It will show up in your sidebar
              and notifications.
            </small>
            {/* <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*" // Restrict file selection to images
            /> */}
          </div>
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Domain</FormLabel>
                  <FormControl>
                    <Input placeholder="Hitler's favourite Jew" {...field} type="url" />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AccountSettings;
