import Image from 'next/image';

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return <Image alt="" src="/logo.png" loading="lazy" quality="50" width={300} height={300} />;
}
