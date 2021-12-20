import s from "./Section.module.css";
import PropTypes from "prop-types";

export function Section(title) {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
