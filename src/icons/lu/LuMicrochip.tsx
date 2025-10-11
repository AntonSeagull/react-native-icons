

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMicrochip = (props: IconProps) => {

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
          <Path  d="M18 12h2" />
          <Path  d="M18 16h2" />
          <Path  d="M18 20h2" />
          <Path  d="M18 4h2" />
          <Path  d="M18 8h2" />
          <Path  d="M4 12h2" />
          <Path  d="M4 16h2" />
          <Path  d="M4 20h2" />
          <Path  d="M4 4h2" />
          <Path  d="M4 8h2" />
          <Path  d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z" />
        </G>
      </Svg>
    );
  }

