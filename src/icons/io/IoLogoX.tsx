

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoX = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9.33349 6.92867L14.5459 1H13.3109L8.78291 6.14671L5.16908 1H1L6.46604 8.78342L1 15H2.235L7.01369 9.56363L10.8309 15H15L9.33349 6.92867ZM7.64142 8.85175L7.08675 8.07621L2.68037 1.91103H4.57759L8.13472 6.88838L8.68705 7.66391L13.3103 14.1334H11.4131L7.64142 8.85175Z" />
        </G>
      </Svg>
    );
  }

