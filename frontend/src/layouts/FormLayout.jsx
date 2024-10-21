// reusable layout for product add and edit routes
import classes from './FormLayout.module.css';

export default function FormLayout({ children }) {
  return (
      <section className={classes['form-layout']}>
          {children}
      </section>
  )
}