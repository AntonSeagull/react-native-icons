

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMonospace = (props: IconProps) => {

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
          <Path d="M11.88,17H9.58L8.65,14.1H4.44L3.57,17H1.32L5.41,4.17H7.66ZM8,11.93,6.52,7.17,5.09,11.93Z" />
          <Path d="M14.13,17,12.22,4.17h1.66L15.07,13l1.46-8.82h1.92l1.4,9,1.23-9h1.62L20.78,17H19.06l-1.6-9.6L15.88,17Z" />
        </G>
      </Svg>
    );
  }

