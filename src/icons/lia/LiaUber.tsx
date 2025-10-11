

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaUber = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 16 3 C 8.8 3 3 8.8 3 16 C 3 23.2 8.8 29 16 29 C 23.2 29 29 23.2 29 16 C 29 8.8 23.2 3 16 3 z M 16 5 C 22.1 5 27 9.9 27 16 C 27 22.1 22.1 27 16 27 C 10.237727 27 5.5526049 22.62604 5.0507812 17 L 13 17 L 13 19 L 19 19 L 19 13 L 13 13 L 13 15 L 5.0507812 15 C 5.5526049 9.3739595 10.237727 5 16 5 z" />
        </G>
      </Svg>
    );
  }

