

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiCss3Full = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8.054 6.045l-0.76 3.799h15.462l-0.483 2.454h-15.472l-0.749 3.799h15.462l-0.862 4.333-6.232 2.064-5.4-2.064 0.37-1.879h-3.799l-0.904 4.558 8.932 3.419 10.297-3.419 1.366-6.858 0.277-1.376 1.756-8.829h-19.26z" fill="#444444" />
        </G>
      </Svg>
    );
  }

