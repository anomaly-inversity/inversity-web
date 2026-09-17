import z from "zod";

export const newDocumentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  file: z.string().min(1, "File is required"),
});

export type NewDocumentFormData = z.infer<typeof newDocumentSchema>;

export const newDocumentDefaultValues: NewDocumentFormData = {
  title: "",
  description: "",
  file: "",
};
