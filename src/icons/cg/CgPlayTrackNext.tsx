

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayTrackNext = (props: IconProps) => {

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
          <Path d="M6 17L14 12L6 7V17Z" fill="currentColor" />
          <Path d="M18 7H15V12V17H18V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

