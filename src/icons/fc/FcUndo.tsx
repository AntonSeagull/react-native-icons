

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcUndo = (props: IconProps) => {

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
          <Path d="M28,14H16v8h12c2.8,0,5,2.2,5,5s-2.2,5-5,5h-3v8h3c7.2,0,13-5.8,13-13S35.2,14,28,14z" />
        </G>
      </Svg>
    );
  }

