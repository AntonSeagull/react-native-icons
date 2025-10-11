

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSkewY = (props: IconProps) => {

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
          <Path d="M4.326 19h15.348a1 1 0 0 0 .962 -1.275l-3.429 -12a1 1 0 0 0 -.961 -.725h-8.492a1 1 0 0 0 -.961 .725l-3.429 12a1 1 0 0 0 .962 1.275z" />
        </G>
      </Svg>
    );
  }

