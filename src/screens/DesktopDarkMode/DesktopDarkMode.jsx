import React, { useEffect } from "react";
import { LinkIcon } from "lucide-react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Utility function
const cn = (...inputs) => twMerge(clsx(inputs));

// Button component
const buttonVariants = (variant, size, className) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
  const variantStyles = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  const sizeStyles = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };
  return cn(baseStyle, variantStyles[variant], sizeStyles[size], className);
};

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={buttonVariants(variant, size, className)}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Card components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

// Separator component
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

// Main component
export const DesktopDarkMode = () => {
  // Navigation links data
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Tech Stack", href: "#" },
    { title: "Projects", href: "#" },
    { title: "Contact", href: "#" },
  ];

  // Tech stack images data
  const techStackImages = [
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/vscode-icons-file-type-html.svg", alt: "HTML" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/vscode-icons-file-type-css.svg", alt: "CSS" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/vscode-icons-file-type-js-official.svg", alt: "JavaScript" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/logos-react.svg", alt: "React" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/vector-2.svg", alt: "Vector" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/logos-bootstrap.svg", alt: "Bootstrap" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/image-3-1.png", alt: "Image" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/image-2-1.png", alt: "Image" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/image-1-1.png", alt: "Image" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/vscode-icons-file-type-tailwind.svg", alt: "Tailwind" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/vscode-icons-file-type-vscode.svg", alt: "VS Code" },
    { src: "https://c.animaapp.com/masayjhmyVPzoj/img/akar-icons-github-fill.svg", alt: "GitHub" },
  ];

  // Projects data
  const projects = [
    {
      title: "Sumz",
      image: "https://c.animaapp.com/masayjhmyVPzoj/img/image-4.png",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      linkIcon: "https://c.animaapp.com/masayjhmyVPzoj/img/group-3.png",
    },
    {
      title: "News-Mag",
      image: "https://c.animaapp.com/masayjhmyVPzoj/img/image-2.png",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      linkIcon: "https://c.animaapp.com/masayjhmyVPzoj/img/group-1.png",
    },
    {
      title: "Cryptoplace",
      image: "https://c.animaapp.com/masayjhmyVPzoj/img/image.png",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      linkIcon: "https://c.animaapp.com/masayjhmyVPzoj/img/akar-icons-link-chain.svg",
    },
    {
      title: "Med-Easy",
      image: "https://c.animaapp.com/masayjhmyVPzoj/img/image-5.png",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      linkIcon: "https://c.animaapp.com/masayjhmyVPzoj/img/group-4.png",
    },
    {
      title: "stock-trade-portfolio",
      image: "https://c.animaapp.com/masayjhmyVPzoj/img/image-3.png",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      linkIcon: "https://c.animaapp.com/masayjhmyVPzoj/img/group-2.png",
    },
    {
      title: "EventScape",
      image: "https://c.animaapp.com/masayjhmyVPzoj/img/image-1.png",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React",
      linkIcon: "https://c.animaapp.com/masayjhmyVPzoj/img/group.png",
      href: "https://id-preview--67ece964-538a-429d-ad58-d5c3fa9a9e03.lovable.app/",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="bg-[#191919] flex flex-row justify-center w-full">
      <div className="bg-dark-mode w-full max-w-[1600px] relative">
        {/* Navigation */}
        <nav className="flex justify-between items-center pt-[45px] px-[190px]">
          <div className="flex space-x-[60px]">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-buttons-big font-[number:var(--buttons-big-font-weight)] text-light-content text-[length:var(--buttons-big-font-size)] text-center tracking-[var(--buttons-big-letter-spacing)] leading-[var(--buttons-big-line-height)] whitespace-nowrap [font-style:var(--buttons-big-font-style)]"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="flex space-x-5">
            <a href="#" aria-label="GitHub">
              <img
                className="w-[30px] h-[29px]"
                alt="GitHub"
                src="https://c.animaapp.com/masayjhmyVPzoj/img/akar-icons-github-fill.svg"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                className="w-[30px] h-[30px]"
                alt="Twitter"
                src="https://c.animaapp.com/masayjhmyVPzoj/img/ant-design-twitter-circle-filled.svg"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                className="w-[30px] h-[30px]"
                alt="LinkedIn"
                src="https://c.animaapp.com/masayjhmyVPzoj/img/entypo-social-linkedin-with-circle.svg"
              />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex justify-center items-center px-[177px] h-screen" style={{ minHeight: '600px' }}>
          <div className="flex flex-row items-center w-full max-w-5xl justify-between">
            <div className="flex flex-col justify-center items-start max-w-[500px]">
              <h1 className="text-5xl font-bold text-white mb-2 flex items-center">
                Hi <span className="ml-2">👋</span>,
              </h1>
              <h2 className="text-4xl font-bold text-white mb-2">My name is</h2>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">Pranay Fadtare</h2>
              <h3 className="text-2xl font-semibold text-gray-200 mt-2">I am a full stack developer</h3>
            </div>
            <motion.div
              className="ml-24"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                className="w-[320px] h-[320px] object-cover rounded-full border-4 border-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Profile"
                src="https://c.animaapp.com/masayjhmyVPzoj/img/50353683-1.png"
                data-aos="zoom-in"
              />
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mt-[200px] flex flex-col items-center px-[177px]" data-aos="fade-up">
          <motion.h2
            className="font-['Poppins',Helvetica] font-bold text-solid-heading-dark-mode text-5xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            className="mt-[49px] font-['Poppins',Helvetica] font-normal text-light-content text-[32px] text-center max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Technologies I&apos;ve been working with recently
          </motion.p>

          <div className="grid grid-cols-6 gap-8 mt-[100px] w-full max-w-7xl">
            {techStackImages.slice(0, 12).map((tech, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-aos="flip-left"
              >
                <img
                  className="w-[80px] h-[80px] object-contain"
                  alt={tech.alt}
                  src={tech.src}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-[200px] flex flex-col items-center px-[177px]" data-aos="fade-up">
          <motion.h2
            className="font-['Poppins',Helvetica] font-bold text-solid-heading-dark-mode text-5xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="mt-[49px] font-['Poppins',Helvetica] font-normal text-light-content text-[32px] text-center max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Things I&apos;ve built so far
          </motion.p>

          <div className="grid grid-cols-3 gap-8 mt-[75px] w-full max-w-7xl">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px #00000055" }}
                transition={{ type: "spring", stiffness: 200 }}
                data-aos="fade-up"
                className="w-full"
              >
                <Card
                  className="bg-[#363535] rounded-[20px] shadow-[2px_2px_100px_#00000033] overflow-hidden h-full"
                >
                  <img
                    className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-300"
                    alt={project.title}
                    src={project.image}
                  />
                  <CardHeader className="pt-[26px] pb-0">
                    {project.href ? (
                      <a
                        href={project.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-['Poppins',Helvetica] font-medium text-solid-heading-dark-mode text-[28px] text-center mx-auto hover:text-blue-400 transition-colors duration-200"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <CardTitle className="font-['Poppins',Helvetica] font-medium text-solid-heading-dark-mode text-[28px] text-center mx-auto">
                        {project.title}
                      </CardTitle>
                    )}
                  </CardHeader>
                  <CardContent className="pt-[17px]">
                    <p className="font-['Poppins',Helvetica] font-light text-solid-heading-dark-mode text-lg leading-[26px]">
                      {project.description}
                    </p>
                    <p className="mt-[16px] font-['Poppins',Helvetica] text-base">
                      <span className="text-[#cccccc]">Tech stack :</span>
                      <span className="font-light text-[#cccccc] text-sm">
                        {" "}
                        {project.techStack}
                      </span>
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-start space-x-[40px] pt-[25px]">
                    <motion.div
                      className="flex items-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {typeof project.linkIcon === "string" ? (
                        <img
                          className="w-5 h-5"
                          alt="Link icon"
                          src={project.linkIcon}
                        />
                      ) : (
                        <LinkIcon className="w-5 h-5 text-white" />
                      )}
                      <a
                        href={project.href || "#"}
                        className="ml-[10px] font-['Poppins',Helvetica] font-normal text-white text-base underline hover:text-blue-400 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        className="w-5 h-5"
                        alt="GitHub"
                        src="https://c.animaapp.com/masayjhmyVPzoj/img/akar-icons-github-fill-1.svg"
                      />
                      <a
                        href="#"
                        className="ml-[10px] font-['Poppins',Helvetica] font-normal text-white text-base underline hover:text-blue-400 transition-colors duration-200"
                      >
                        View Code
                      </a>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-[218px] px-[189px]">
          <div className="flex justify-between items-center mb-[83px]">
            <div className="flex space-x-[20px]">
              <div className="font-['DM_Sans',Helvetica] font-normal text-light-content text-lg">
                +91 9920373050
              </div>
              <div className="font-['DM_Sans',Helvetica] font-normal text-light-content text-lg">
                pranayfadtare7@gmail.com
              </div>
            </div>
            <div className="flex space-x-5">
              <a href="#" aria-label="GitHub">
                <img
                  className="w-[30px] h-[29px]"
                  alt="GitHub"
                  src="https://c.animaapp.com/masayjhmyVPzoj/img/akar-icons-github-fill.svg"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  className="w-[30px] h-[30px]"
                  alt="Twitter"
                  src="https://c.animaapp.com/masayjhmyVPzoj/img/ant-design-twitter-circle-filled.svg"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  className="w-[30px] h-[30px]"
                  alt="LinkedIn"
                  src="https://c.animaapp.com/masayjhmyVPzoj/img/entypo-social-linkedin-with-circle.svg"
                />
              </a>
            </div>
          </div>

          <Separator className="w-full h-1.5 bg-[url('https://c.animaapp.com/masayjhmyVPzoj/img/divider.svg')]" />

          <div className="flex space-x-[60px] justify-center mt-[65px] mb-[60px]">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-['DM_Sans',Helvetica] font-normal text-light-content text-lg"
              >
                {link.title}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};
