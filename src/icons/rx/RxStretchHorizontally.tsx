

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxStretchHorizontally = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 7.5, 7.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M14.4999 0.999992C14.2237 0.999992 13.9999 1.22385 13.9999 1.49999L13.9999 5.99995L0.999992 5.99995L0.999992 1.49999C0.999992 1.22385 0.776136 0.999992 0.499996 0.999992C0.223856 0.999992 -9.78509e-09 1.22385 -2.18556e-08 1.49999L4.07279e-07 13.4999C3.95208e-07 13.776 0.223855 13.9999 0.499996 13.9999C0.776136 13.9999 0.999992 13.776 0.999992 13.4999L0.999992 8.99992L13.9999 8.99992L13.9999 13.4999C13.9999 13.776 14.2237 13.9999 14.4999 13.9999C14.776 13.9999 14.9999 13.776 14.9999 13.4999L14.9999 1.49999C14.9999 1.22385 14.776 0.999992 14.4999 0.999992Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

