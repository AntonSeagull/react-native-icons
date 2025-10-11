

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImeBreak = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 8h2v1h-2zM3 8h3v1h-3zM7 8h2v1h-2zM10 8h3v1h-3zM14 8h2v1h-2zM13.75 0l0.25 7h-12l0.25-7h0.5l0.25 6h10l0.25-6zM2.25 16l-0.25-6h12l-0.25 6h-0.5l-0.25-5h-10l-0.25 5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

