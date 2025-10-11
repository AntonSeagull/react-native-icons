

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRulerMeasure2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125z" />
          <Path d="M12 9h-2" />
          <Path d="M12 6h-3" />
          <Path d="M12 12h-3" />
          <Path d="M12 18h-3" />
          <Path d="M12 15h-2" />
          <Path d="M21 3h-4" />
          <Path d="M19 3v18" />
          <Path d="M21 21h-4" />
        </G>
      </Svg>
    );
  }

