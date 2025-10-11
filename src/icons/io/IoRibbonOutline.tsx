

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoRibbonOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M143.65,227.82,48,400l86.86-.42a16,16,0,0,1,13.82,7.8L192,480l88.33-194.32" />
          <Path d="M366.54,224,464,400l-86.86-.42a16,16,0,0,0-13.82,7.8L320,480,256,339.2" />
        </G>
      </Svg>
    );
  }

