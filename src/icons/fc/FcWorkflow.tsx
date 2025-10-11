

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcWorkflow = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M35.3,19.3l-5.6-5.6c-0.4-0.4-0.4-1,0-1.4l5.6-5.6c0.4-0.4,1-0.4,1.4,0l5.6,5.6c0.4,0.4,0.4,1,0,1.4 l-5.6,5.6C36.3,19.7,35.7,19.7,35.3,19.3z" fill="#00BCD4" />
        </G>
      </Svg>
    );
  }

