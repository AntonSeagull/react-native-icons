

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMoveUp = (props: IconProps) => {

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
          <Path  d="M17 19.071H15V11.071H17V19.071Z" fill="currentColor" />
          <Path  d="M9 19.071H7V11.071H9V19.071Z" fill="currentColor" />
          <Path  d="M12.9999 19.071H10.9999V9.07109H7.96454L11.9644 5L15.9644 9.07109H12.9999V19.071Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

