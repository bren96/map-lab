import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Page!</h1>
    </div>
  );
}
