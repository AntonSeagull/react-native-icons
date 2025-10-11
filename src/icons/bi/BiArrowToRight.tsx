

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiArrowToRight = (props: IconProps) => {

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
          <Path d="M18 6h2v12h-2zM4 13h8.586l-4.293 4.293 1.414 1.414L16.414 12 9.707 5.293 8.293 6.707 12.586 11H4z" />
        </G>
      </Svg>
    );
  }

