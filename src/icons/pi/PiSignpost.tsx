

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSignpost = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M246,106.65,212.33,69.3A16,16,0,0,0,200.44,64H136V32a8,8,0,0,0-16,0V64H40A16,16,0,0,0,24,80v64a16,16,0,0,0,16,16h80v64a8,8,0,0,0,16,0V160h64.44a16,16,0,0,0,11.89-5.3L246,117.35A8,8,0,0,0,246,106.65ZM200.44,144H40V80H200.44l28.8,32Z" />
        </G>
      </Svg>
    );
  }

