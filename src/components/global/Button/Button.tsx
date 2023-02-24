import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    href?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    target?: string;
    children: string;
    righticon?: ReactElement;
    lefticon?: ReactElement;
    className?: string;
    onClick?: (e?: any) => any;
}

function Button({ href, type, target, children, lefticon, righticon, className, onClick }: Props) {
    if (href) {
        return (
            <Link to={href} className={className} onClick={onClick} target={target}>
                <span>{lefticon} </span>
                <span>{children}</span>
                <span> {righticon}</span>
            </Link>
        );
    } else {
        return (
            <button className={className} onClick={onClick} type={type}>
                <span>{lefticon} </span>
                <span>{children}</span>
                <span> {righticon}</span>
            </button>
        );
    }
}

export { Button };
