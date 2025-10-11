

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaWaveSquare = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 640 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36z" />
        </G>
      </Svg>
    );
  }

