

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPizza = (props: IconProps) => {

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
          <Path  d="m12 14-1 1" />
          <Path  d="m13.75 18.25-1.25 1.42" />
          <Path  d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
          <Path  d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
          <Path  d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
        </G>
      </Svg>
    );
  }

