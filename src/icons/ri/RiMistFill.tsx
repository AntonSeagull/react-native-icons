

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiMistFill = (props: IconProps) => {

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
          <Path  d="M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H12V11H2V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H22V16H12V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z" />
        </G>
      </Svg>
    );
  }

