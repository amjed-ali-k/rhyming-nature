import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { TITLE, DATE, SITE_DESCRIPTION } from '@lib/constants';
import Button from './hms/Button';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className="flex items-center">
        <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          <br className={styleUtils['show-on-desktop']} /> {TITLE}
        </h1>
        <div className="font-bold leading-loose text-2xl text-red-400">2023</div>
      </div>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
      <div className="flex justify-center my-8">
        <Button onClick={() => router.push('/stage/inauguration')}>Watch Now</Button>
      </div>
    </div>
  );
}
