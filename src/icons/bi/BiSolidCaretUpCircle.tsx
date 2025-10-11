

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidCaretUpCircle = (props: IconProps) => {

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
          <Path  d="M12 2C6.485 2 2 6.486 2 12s4.485 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2zM7 14l5-6 5 6H7z" />
        </G>
      </Svg>
    );
  }

