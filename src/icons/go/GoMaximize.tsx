

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoMaximize = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9.47 13.47a.749.749 0 1 1 1.06 1.06l-5.719 5.72H9a.75.75 0 0 1 0 1.5H3a.731.731 0 0 1-.133-.013l-.016-.003c-.014-.002-.026-.008-.039-.011-.034-.009-.067-.017-.099-.031a.659.659 0 0 1-.083-.044.696.696 0 0 1-.279-.279A.713.713 0 0 1 2.25 21v-6a.75.75 0 0 1 1.5 0v4.189l5.72-5.719ZM21 2.25a.72.72 0 0 1 .132.012l.016.003c.014.002.026.008.04.011.033.009.066.017.098.031a.659.659 0 0 1 .083.044.696.696 0 0 1 .279.279.659.659 0 0 1 .102.37v6a.75.75 0 0 1-1.5 0V4.811l-5.72 5.719a.749.749 0 1 1-1.06-1.06l5.719-5.72H15a.75.75 0 0 1 0-1.5h6Z" />
        </G>
      </Svg>
    );
  }

