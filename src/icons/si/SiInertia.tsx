

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiInertia = (props: IconProps) => {

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
          <Path  d="M6.901 5.331H0L6.669 12 0 18.669h6.901L13.571 12 6.9 5.331zm10.43 0H10.43L17.099 12l-6.67 6.669h6.902L24 12l-6.669-6.669z" />
        </G>
      </Svg>
    );
  }

