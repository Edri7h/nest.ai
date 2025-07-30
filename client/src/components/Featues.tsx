import { motion } from "framer-motion";
import {
  PenLine,
  Type,
  ImagePlus,
  Eraser,
  Scissors,
  FileText,
} from "lucide-react";

const features = [
  {
    title: "AI Writer",
    description: "Generate high-quality content instantly using our advanced language model.",
    icon: <PenLine className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Title Generator",
    description: "Craft catchy blog or video titles with a single click.",
    icon: <Type className="text-pink-600 w-6 h-6" />,
  },
  {
    title: "Image Generator",
    description: "Create stunning visuals and artwork from text prompts using AI.",
    icon: <ImagePlus className="text-green-600 w-6 h-6" />,
  },
  {
    title: "Background Remover",
    description: "Remove backgrounds from images seamlessly with AI precision.",
    icon: <Eraser className="text-orange-600 w-6 h-6" />,
  },
  {
    title: "Object Remover",
    description: "Erase unwanted objects from photos using smart object detection.",
    icon: <Scissors className="text-purple-600 w-6 h-6" />,
  },
  {
    title: "Resume Review",
    description: "Let AI evaluate and enhance your resume for better job results.",
    icon: <FileText className="text-teal-600 w-6 h-6" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features of Nest.ai</h2>
        <p className="text-gray-600 text-lg">Smart tools for writing, editing, designing — powered by AI.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
