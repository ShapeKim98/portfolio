import { Github, ExternalLink, Mail, Phone, GraduationCap, Users, Trophy, ArrowRight } from "lucide-react";

export const ICON_MAP: Record<string, React.FC<any>> = {
  github: Github,
  "external-link": ExternalLink,
  mail: Mail,
  phone: Phone,
  "graduation-cap": GraduationCap,
  users: Users,
  trophy: Trophy,
  "arrow-right": ArrowRight,
};

export function getIcon(name: string): React.FC<any> | undefined {
  return ICON_MAP[name];
}
