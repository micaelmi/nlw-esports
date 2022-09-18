interface WeekDayButtonProps {
  title: string;
  initial: string;
}

export function WeekDayButton(props: WeekDayButtonProps) {
  return (
    <button title={props.title} className="w-8 h-8 rounded bg-zinc-900">
      {props.initial}
    </button>
  );
}
