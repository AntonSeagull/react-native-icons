

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgCornerDoubleRightUp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16.2163 9.25045L17.6305 7.83624L13.3879 3.59363L9.14526 7.83627L10.5595 9.25048L13.3879 6.42205L16.2163 9.25045Z" fill="currentColor" />
          <Path  d="M10.5595 13.4932L9.14526 12.0789L13.3879 7.83628L17.6305 12.0789L16.2163 13.4931L14.3695 11.6463V16.4063C14.3695 18.6155 12.5786 20.4063 10.3695 20.4063H6.36951V18.4063H10.3695C11.4741 18.4063 12.3695 17.5109 12.3695 16.4063V11.6831L10.5595 13.4932Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

