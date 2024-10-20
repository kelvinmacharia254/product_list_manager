// reusable layout for product add and edit routes
import classes from './ProductLayout.module.css';

export default function ProductLayout({ children }) {
  return (
      <section className={classes['product-layout']}>
          {children}
      </section>
  )
}