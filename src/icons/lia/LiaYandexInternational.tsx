

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaYandexInternational = (props: IconProps) => {

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
          <Path  d="M 20.800781 1 L 15.199219 17.199219 L 10.199219 4 L 7 4 L 14 22.599609 L 14 31 L 17 31 L 17 21.099609 L 24 1 L 20.800781 1 z" />
        </G>
      </Svg>
    );
  }

