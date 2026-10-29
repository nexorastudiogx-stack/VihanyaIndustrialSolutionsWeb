interface Props {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  multiline?: boolean;
  list?: string;
  min?: number;
}

export default function Field({ label, name, type = 'text', required, placeholder, defaultValue, multiline, list, min }: Props) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {required && <span className="text-signal"> *</span>}
      </label>
      {multiline ? (
        <textarea id={id} name={name} required={required} placeholder={placeholder} defaultValue={defaultValue} rows={4} className="field" />
      ) : (
        <input id={id} name={name} type={type} required={required} placeholder={placeholder} defaultValue={defaultValue} list={list} min={min} className="field" />
      )}
    </div>
  );
}

/** Hidden spam trap. Real visitors never see or fill it. */
export function Honeypot() {
  return (
    <div className="hidden" aria-hidden>
      <label>
        Leave this field empty
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
