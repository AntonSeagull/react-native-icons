

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbKeyframeAlignCenter = (props: IconProps) => {

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
          <Path d="M12 20v2" />
          <Path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z" />
          <Path d="M12 2v2" />
          <Path d="M3 12h2" />
          <Path d="M19 12h2" />
        </G>
      </Svg>
    );
  }

