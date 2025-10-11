

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiFileMusicFill = (props: IconProps) => {

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
          <Path  d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 12.05C10.8384 12.0172 10.6712 12 10.5 12C9.11929 12 8 13.1193 8 14.5C8 15.8807 9.11929 17 10.5 17C11.8807 17 13 15.8807 13 14.5V10H16V8H11V12.05Z" />
        </G>
      </Svg>
    );
  }

