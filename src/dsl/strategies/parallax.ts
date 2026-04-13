/**
 * Strategy Pattern: ParallaxStrategy
 *
 * Encapsulates the parallax configuration for each section shell.
 * Extracted from HeroSection, AboutSection, ProfileSection,
 * ExperienceSection, and FooterSection.
 */

export interface BlobConfig {
  /** Tailwind position classes (e.g. "absolute top-1/4 -left-32") */
  position: string;
  /** Tailwind size classes (e.g. "w-[500px] h-[500px]") */
  size: string;
  /** Tailwind color class (e.g. "bg-primary/5") */
  color: string;
  /** Tailwind blur class (e.g. "blur-3xl") */
  blur: string;
}

export interface AccentElement {
  type: "dot" | "line" | "circle" | "plus";
  /** Tailwind position classes */
  position: string;
  /** Tailwind size classes */
  size: string;
  /** Tailwind color class */
  color: string;
  /** Whether this element rotates with scroll */
  rotate?: boolean;
}

export interface ParallaxStrategy {
  /** Scroll offset config: ["start start", "end start"] etc. */
  scrollOffset: [string, string];
  /** Background layer Y distance: [from, to] */
  bgDistance: [number, number];
  /** Background layer spring config */
  bgSpring: { stiffness: number; damping: number };
  /** Background layer scale range */
  bgScaleRange?: [number, number];
  /** Blob decorations in the background layer */
  blobs: BlobConfig[];
  /** Optional accent (foreground) layer */
  accent?: {
    /** Accent layer Y distance: [from, to] */
    distance: [number, number];
    /** Accent layer spring config */
    spring: { stiffness: number; damping: number };
    /** Accent rotation range: [from, to] (degrees) */
    rotateRange?: [number, number];
    /** Accent decorative elements */
    elements: AccentElement[];
  };
}

/* ─── Hero Section ─── */

export const heroParallax: ParallaxStrategy = {
  scrollOffset: ["start start", "end start"],
  bgDistance: [0, 180],
  bgSpring: { stiffness: 80, damping: 22 },
  bgScaleRange: [1, 1.15],
  blobs: [
    {
      position: "absolute top-1/4 -left-32",
      size: "w-[500px] h-[500px]",
      color: "bg-primary/5",
      blur: "blur-3xl",
    },
    {
      position: "absolute bottom-1/4 -right-32",
      size: "w-[400px] h-[400px]",
      color: "bg-accent/30",
      blur: "blur-3xl",
    },
    {
      position: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      size: "w-[600px] h-[600px]",
      color: "bg-primary/3",
      blur: "blur-3xl",
    },
  ],
  accent: {
    distance: [0, -220],
    spring: { stiffness: 70, damping: 18 },
    rotateRange: [0, 60],
    elements: [
      {
        type: "circle",
        position: "absolute top-[15%] left-[10%]",
        size: "w-4 h-4",
        color: "border-2 border-primary/15",
        rotate: true,
      },
      {
        type: "line",
        position: "absolute top-[30%] right-[8%]",
        size: "w-24 h-px",
        color: "bg-primary/10",
      },
      {
        type: "dot",
        position: "absolute bottom-[30%] left-[15%]",
        size: "w-2 h-2",
        color: "bg-primary/20",
        rotate: true,
      },
      {
        type: "plus",
        position: "absolute bottom-[20%] right-[12%]",
        size: "text-2xl",
        color: "text-primary/10",
      },
    ],
  },
};

/* ─── About Section ─── */

export const aboutParallax: ParallaxStrategy = {
  scrollOffset: ["start end", "end start"],
  bgDistance: [25, -25],
  bgSpring: { stiffness: 120, damping: 28 },
  bgScaleRange: [1, 1.05],
  blobs: [
    {
      position: "absolute top-[10%] -right-[100px]",
      size: "w-[400px] h-[400px]",
      color: "bg-primary/5",
      blur: "blur-3xl",
    },
    {
      position: "absolute bottom-[15%] -left-[80px]",
      size: "w-[300px] h-[300px]",
      color: "bg-primary/3",
      blur: "blur-3xl",
    },
  ],
  accent: {
    distance: [90, -90],
    spring: { stiffness: 80, damping: 20 },
    rotateRange: [0, 30],
    elements: [
      {
        type: "circle",
        position: "absolute top-[20%] left-[8%]",
        size: "w-3 h-3",
        color: "border-2 border-primary/20",
        rotate: true,
      },
      {
        type: "line",
        position: "absolute top-[40%] right-[5%]",
        size: "w-20 h-px",
        color: "bg-primary/15",
      },
      {
        type: "dot",
        position: "absolute bottom-[25%] right-[12%]",
        size: "w-1.5 h-1.5",
        color: "bg-primary/25",
      },
      {
        type: "plus",
        position: "absolute bottom-[40%] left-[15%]",
        size: "text-3xl",
        color: "text-primary/15",
      },
    ],
  },
};

/* ─── Profile Section ─── */

export const profileParallax: ParallaxStrategy = {
  scrollOffset: ["start end", "end start"],
  bgDistance: [25, -25],
  bgSpring: { stiffness: 120, damping: 28 },
  bgScaleRange: [1, 1.05],
  blobs: [
    {
      position: "absolute top-[5%] -right-[120px]",
      size: "w-[450px] h-[450px]",
      color: "bg-primary/4",
      blur: "blur-3xl",
    },
    {
      position: "absolute bottom-[10%] -left-[100px]",
      size: "w-[350px] h-[350px]",
      color: "bg-primary/3",
      blur: "blur-3xl",
    },
  ],
  accent: {
    distance: [80, -80],
    spring: { stiffness: 80, damping: 20 },
    rotateRange: [0, 35],
    elements: [
      {
        type: "circle",
        position: "absolute top-[12%] right-[10%]",
        size: "w-3 h-3",
        color: "border-2 border-primary/15",
        rotate: true,
      },
      {
        type: "line",
        position: "absolute top-[35%] left-[5%]",
        size: "w-16 h-px",
        color: "bg-primary/12",
      },
      {
        type: "dot",
        position: "absolute bottom-[20%] right-[8%]",
        size: "w-2 h-2",
        color: "bg-primary/20",
      },
    ],
  },
};

/* ─── Experience Section ─── */

export const experienceParallax: ParallaxStrategy = {
  scrollOffset: ["start end", "end start"],
  bgDistance: [25, -25],
  bgSpring: { stiffness: 120, damping: 28 },
  bgScaleRange: [1, 1.05],
  blobs: [
    {
      position: "absolute top-[5%] -right-[120px]",
      size: "w-[450px] h-[450px]",
      color: "bg-primary/4",
      blur: "blur-3xl",
    },
    {
      position: "absolute bottom-[10%] -left-[100px]",
      size: "w-[350px] h-[350px]",
      color: "bg-primary/3",
      blur: "blur-3xl",
    },
  ],
  // Experience section has no accent layer in the original code
};

/* ─── Footer Section ─── */

export const footerParallax: ParallaxStrategy = {
  scrollOffset: ["start end", "end start"],
  bgDistance: [20, -20],
  bgSpring: { stiffness: 120, damping: 28 },
  bgScaleRange: [1, 1.05],
  blobs: [
    {
      position: "absolute top-[20%] left-[10%]",
      size: "w-[350px] h-[350px]",
      color: "bg-primary/4",
      blur: "blur-3xl",
    },
    {
      position: "absolute bottom-[10%] right-[5%]",
      size: "w-[300px] h-[300px]",
      color: "bg-primary/3",
      blur: "blur-3xl",
    },
  ],
  accent: {
    distance: [70, -70],
    spring: { stiffness: 80, damping: 20 },
    rotateRange: [0, 35],
    elements: [
      {
        type: "circle",
        position: "absolute top-[15%] right-[15%]",
        size: "w-3 h-3",
        color: "border-2 border-primary/15",
        rotate: true,
      },
      {
        type: "line",
        position: "absolute bottom-[30%] left-[8%]",
        size: "w-20 h-px",
        color: "bg-primary/10",
      },
    ],
  },
};
