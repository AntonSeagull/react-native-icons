

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandJuejin = (props: IconProps) => {

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
          <Path  d="M2 12l10 7.422l10 -7.422" />
          <Path  d="M7 9l5 4l5 -4" />
          <Path  d="M11 6l1 .8l1 -.8l-1 -.8z" />
        </G>
      </Svg>
    );
  }

