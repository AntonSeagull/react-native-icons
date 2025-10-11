

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiArrowFromTop = (props: IconProps) => {

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
          <Path d="M6 4h12v2H6zm6 16.414 6.707-6.707-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293-1.414 1.414z" />
        </G>
      </Svg>
    );
  }

