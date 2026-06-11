import logo from "@/assets/logo-prime.png";

export function Logo({
  className = "h-10 w-auto",
  alt = "Prime Finish Renovations",
}: {
  className?: string;
  alt?: string;
}) {
  return <img src={logo} alt={alt} className={className} loading="eager" />;
}