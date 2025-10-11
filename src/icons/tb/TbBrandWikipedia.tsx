

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandWikipedia = (props: IconProps) => {

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
          <Path  d="M3 4.984h2" />
          <Path  d="M8 4.984h2.5" />
          <Path  d="M14.5 4.984h2.5" />
          <Path  d="M22 4.984h-2" />
          <Path  d="M4 4.984l5.455 14.516l6.545 -14.516" />
          <Path  d="M9 4.984l6 14.516l6 -14.516" />
        </G>
      </Svg>
    );
  }

