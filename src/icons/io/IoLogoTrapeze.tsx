

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoTrapeze = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M311.05 189.26C311.069 189.229 311.087 189.198 311.105 189.167L376.085 78.5494L257.923 8L192.943 118.617C192.911 118.672 192.879 118.726 192.847 118.781L8 433.451L126.162 504L212.11 357.688C226.722 375.306 244.503 390.762 265.218 403.13L434.022 503.915L504 384.789L335.197 284.004C302.598 264.541 291.801 222.142 311.05 189.26Z" />
        </G>
      </Svg>
    );
  }

