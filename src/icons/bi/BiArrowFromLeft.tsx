

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiArrowFromLeft = (props: IconProps) => {

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
          <Path d="M4 6h2v12H4zm4 7h8.586l-4.293 4.293 1.414 1.414L20.414 12l-6.707-6.707-1.414 1.414L16.586 11H8z" />
        </G>
      </Svg>
    );
  }

