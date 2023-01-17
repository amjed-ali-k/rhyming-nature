import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';

export default function LearnMore() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
      Organized by{' '}
      <a
        href={'https://gptcperinthalmanna.in'}
        className={styles['contact-email']}
        target="_blank"
        rel="noopener noreferrer"
      >
        Govt Polytechnic College, Perinthalmanna
      </a>
      .
    </div>
  );
}
