

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiJamstack = (props: IconProps) => {

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
          <Path  d="M12 0C5.365 0 0 5.364 0 12s5.365 12 12 12 12-5.364 12-12V0zm.496 3.318h8.17v8.17h-8.17zm-9.168 9.178h8.16v8.149c-4.382-.257-7.904-3.767-8.16-8.149zm9.168.016h8.152a8.684 8.684 0 01-8.152 8.148z" />
        </G>
      </Svg>
    );
  }

