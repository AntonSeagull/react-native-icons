

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNotepadText = (props: IconProps) => {

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
          <Path  d="M8 2v4" />
          <Path  d="M12 2v4" />
          <Path  d="M16 2v4" />
          <Path  d="M8 10h6" />
          <Path  d="M8 14h8" />
          <Path  d="M8 18h5" />
        </G>
      </Svg>
    );
  }

