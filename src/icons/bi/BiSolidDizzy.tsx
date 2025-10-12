

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidDizzy = (props: IconProps) => {

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
          <Path  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8 12.414l-1.293 1.293-1.414-1.414L6.586 11 5.293 9.707l1.414-1.414L8 9.586l1.293-1.293 1.414 1.414L9.414 11l1.293 1.293-1.414 1.414L8 12.414zM14 18h-4v-2h4v2zm4.707-5.707-1.414 1.414L16 12.414l-1.293 1.293-1.414-1.414L14.586 11l-1.293-1.293 1.414-1.414L16 9.586l1.293-1.293 1.414 1.414L17.414 11l1.293 1.293z" />
        </G>
      </Svg>
    );
  }

