"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { aboutData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4" />
              {/* Image container */}
              <div className="relative w-full h-full bg-secondary rounded-lg overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Pranav Chandra"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{aboutData.summary}</p>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Tech Focus</h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.focus.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
