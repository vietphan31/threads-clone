import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const formSchema = z
  .object({
    content: z.string(),
    imageUrls: z.array(z.string()),
  })
  .partial()
  .refine(({ content, imageUrls }) => content !== "" && !imageUrls?.length);

type FormData = z.infer<typeof formSchema>;

export const CreateThreadModal = () => {
  const { isOpen, type, onClose } = useModal();

  const isOpenModal = isOpen && type === "createThread";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrls: [],
    },
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const control = form.control as any;

  return (
    <Dialog open={isOpenModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">New thread</DialogTitle>
        </DialogHeader>
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU" />
          </Avatar>
          <Form {...form}>
            <form className="ml-2 flex flex-1 flex-col" onSubmit={form.handleSubmit(onSubmit)}>
              <span className="text-sm font-semibold text-black">daylaviet</span>
              <input type="text" className="text-sm outline-none" placeholder="Start a threads" />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button variant="outline" disabled={form.formState.isValid}>
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
